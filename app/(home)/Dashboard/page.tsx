
import styles from '@/public/CSS/allpaige.module.css';
async function Something_Something() {
    const name =await fetch('https://dummy.restapiexample.com/api/v1/employees')
    if(!name.ok){
        console.log("All Good")
    }
    else{
        console.log("Something Fucking Happend")
    }
    return name.json()
}

export default async function Dashboard(){
    console.log("idfh")
    const nn= await Something_Something();
    return(
        <main className={styles.main}>
        <h1>
            This is the Dashboard</h1>  
            
            <h2>
                {JSON.stringify(nn)}
            </h2>
        
            </main>
    )
}