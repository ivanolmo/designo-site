# Static multi-page website built with Astro and Preact

This app is a challenge on [Frontendmentor.io](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT). The goal is to implement a beautiful and responsive seven page website. Most of the site was built using the [Astro](https://Astro.build) framework with some Preact components.

**View the live app hosted with Vercel:** [https://designo-site-ivan.vercel.app/](https://designo-site-ivan.vercel.app/)

<img src="https://user-images.githubusercontent.com/48425752/189032024-4ecb1921-e7a5-43b2-b9dc-0dc713231cfb.png" width="200">
<img src="https://user-images.githubusercontent.com/48425752/189032005-754e4b1e-541e-4126-9a36-6ff3b3cd19a3.png" width="400">
<img src="https://user-images.githubusercontent.com/48425752/189031563-1e2801cf-d1e0-46ef-a6ee-e965a86a19e0.png" width="800">

## How it's made

**Tech used:** Astro, Preact, TypeScript, TailwindCSS

### **Astro**

`Astro` is _another_ web framework somewhat new to the scene, and I decided to give it a try. After building this site, I can say it's **very** similar to building with plain HTML and CSS, with the added benefit of being able to include almost any UI framework of your choice if you need to. You can also build reusable components, and they can be native `.astro` components, or one from your UI framework (i.e. `Button.tsx`), and then use them anywhere on your site! Import the component into a page and implement it. It just works.

Here's an example of a basic button that's being used on almost every page (Astro fully support `TypeScript` syntax):

```astro
---
export interface Props {
  buttonText: string;
  buttonBgColor: string;
  buttonTextColor: string;
  buttonHref: string;
}

const { buttonText, buttonBgColor, buttonTextColor, buttonHref } =
  Astro.props as Props;
---

<a href={buttonHref}>
  <div
    class={`flex justify-center items-center py-4 rounded-lg w-[152px] ${buttonBgColor} hover:bg-peach-400 ${buttonTextColor} hover:text-white transition-colors duration-300`}
  >
    <span class='font-medium uppercase'>{buttonText}</span>
  </div>
</a>
```

And it's usage on the home page:

```astro
---
import MainLayout from '@layouts/MainLayout.astro';
import Button from '@components/ui/Button.astro';
---

<MainLayout>
  ....
  <Button
    buttonText='Learn More'
    buttonBgColor='bg-white'
    buttonTextColor='text-black'
    buttonHref='/about'
  />
  ....
</MainLayout>
```

The learning experience was awesome and suspiciously simple, and I'm excited continue using `Astro` in the future!

### **Preact**

`Astro` is designed to be lightweight and super fast. I needed a bit of interactivity, so I decided to build 2 components with `Preact`. One is the mobile menu, and the other is the contact form with Formik field validation. Combined, the components are less than 100kb in file size. This was my first time using `Preact`, but I'm experienced with `React`, so that knowledge slotted right in. I picked up `Preact` right away, and it was a great choice for these two components.

### **Tailwind CSS**

I have some experience with `Tailwind` in other projects, so it was my go-to choice for this one. At this point, I'm used to some of the really long class names, but I'm learning my way through that. Using the config file to declare some reusable styles, and declaring base styles in the `CSS` file, really go a long way.

## Optimizations

The team behind `Astro` says that ["It should be impossible to build a slow website in Astro"](https://docs.astro.build/en/concepts/why-astro/#fast-by-default). I've found that to be true. This site site is almost completely static, and my first thought was to use `Next.js` and `SSG`. It'd be nearly as fast as it is in `Astro`, but the bundle size would be _much bigger_!

All of the image assets provided for this project were `.png` and `.jpg`. I converted them all to `.webp` instead, and reduced total image size by more than half. I saw a huge increase in the mobile Lighthouse score with just that change. Here are the current Lighthouse scores (lower SEO score due to the text "Learn More" in a link, which Lighthouse/Google rate as poor descriptive text):

Mobile

![mobile-lighthouse](https://user-images.githubusercontent.com/48425752/189031620-3821ac95-d513-4660-ac36-c28e3043889a.png)

Desktop

![desktop-lighthouse](https://user-images.githubusercontent.com/48425752/189031748-156a0715-03c7-4712-9c83-2f383f065b9c.png)

## Lessons Learned

Yes, there's always some new framework to use, but `Astro` in particular was quite fun to learn and implement. Getting `Preact` to play nicely with `Astro` took a bit of trial and error with the `ContactForm.tsx` component due to some build errors and a known bug with the `Vite` bundler used by `Astro`. I had to set the component to load with client side rendering only, which is easy with an `Astro` provided 'Template Directive'. In this case, I had to set the directive to `client:only='preact'`, to tell Astro that this particular `Preact` component will load on the client only.

## Shoutouts

I found out about `Astro` by watching content by [Theo - ping.gg](https://twitter.com/t3dotgg), and decided to use it after seeing how easy it was for [Jack Herrington](https://www.youtube.com/c/jackherrington) to demo. Both of these guys put out great content.
