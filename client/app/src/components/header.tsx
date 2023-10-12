import Image from "next/image"
import Link from "next/link"
const Header = () => {
  return (
    <header >
      <nav className="flex justify-between items-center h-20 bg-background">

        <Image className="ml-2" src={''} alt="Brand"/>
        
        <div className="text-sm mr-3">
          <Link className="mr-7" href={'/'}>Registrarme</Link>
          <Link className="p-2 bg-slate-700 text-slate-100 rounded-xl" href={'/'}>Iniciar Sesión</Link>
        </div>
      </nav>
      <div className="flex flex-col ">
        <Image src={''} className="w-full h-60 " alt="header"/>
        <p className="mx-7 mt-6">Nombre es la app de cuidado de plantas que revolucionó la forma en que las personas cuidan y mantienen sus plantas</p>
      </div>
    </header>
  )
}

export default Header