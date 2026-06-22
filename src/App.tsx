import './App.css'

interface daftar {
    id:number;
    nama:string;
    nilai:number;
}

function DaftarSiswa(){
    const siswa :daftar[]=[
        {id:1, nama:'Varel',nilai:80},
        {id:2, nama:'Owen',nilai: 90},
        {id:3, nama:'Alex',nilai: 85},
        {id:4, nama:'Afdhal',nilai: 70},
        {id:5, nama:'Christian',nilai: 75}
    ]
    const siswaLulus = siswa.filter((x)=>x.nilai >= 80)

    const siswaGagal = siswa.filter((x)=>x.nilai <80)
    return(
        <>
        <h3>Siswa yang lulus dengan pendapatan nilai diatas 80:</h3>
        <ul className="daftarLulus">
            {siswaLulus.map((x)=>(
            <li key={x.id}>
                {x.nama} - {x.nilai}
            </li>
            ))}
        </ul>

        <h3>Siswa yang tidak lulus karena tidak mencapai nilai 80:</h3>
        <ul className='daftarGagal'>
            {siswaGagal.map((x)=>(
                <li key={x.id}>
                    {x.nama} - {x.nilai}
                </li>
            ))}
        </ul>
        </>
    )
}

export default DaftarSiswa

