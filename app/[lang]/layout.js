import Sidbar from "@/_components/Sidbar"

export const metadata = {
   title: "MovieDB - A Collection of Your Refreshment",
   description: "Generated by create next app",
 }
 
 export default function LanguageLayout({modal, children, params: {lang} }) {
  
   return (
       <>
        <div className="container mx-auto grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidbar lang={lang} />

            <div className="content">{children}</div>
          </div>


        <div>
        {modal}
        </div>
       </>
   )
 }
 