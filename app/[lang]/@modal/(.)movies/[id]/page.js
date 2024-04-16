import Modal from "@/_components/Modal"
import SingleMovie from "@/_components/SingleMovie"

const MovieModalIdPage = ({params: {lang, id}}) => {
  // console.log(lang);
  return (
    <Modal>
      <SingleMovie id={id} lang={lang} modal={true}/>
    </Modal>
  )
}

export default MovieModalIdPage
