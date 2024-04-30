interface ContactLayoutProps {
    children: React.ReactNode;
  }


export default function Contactlayout({children}:ContactLayoutProps){
    return(
        <>
        <h1 >somethign befor</h1>
       {children}
       <h2>something after
       </h2>
        </>
    )
}