interface IProps {
  dark: boolean;
  rowOne?: string;
  rowTwo?: string;
  rowThree?: string;
}

export default function Details(props: IProps) {
  const { dark, rowOne, rowTwo, rowThree } = props;

  return (
    <div
      className={`flex flex-col items-center md:items-start gap-2 text-base ${
        dark ? 'text-black' : 'text-gray-200/50'
      }`}
    >
      <span className='font-bold'>{rowOne}</span>
      <span>{rowTwo}</span>
      <span>{rowThree}</span>
    </div>
  );
}
