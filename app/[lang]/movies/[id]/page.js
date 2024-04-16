import SingleMovie from "@/_components/SingleMovie"


const page = ({params: {lang, id}}) => {

  return (
      <SingleMovie lang={lang} id={id}/>
  )
}

export default page
