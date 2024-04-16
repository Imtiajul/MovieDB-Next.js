import Landing from "@/_components/Landing";

export default function Home({params: {lang}}) {
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Landing lang={lang}/>
    </div>
  );
}
