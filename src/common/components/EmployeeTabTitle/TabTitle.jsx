
import { Calendar } from 'lucide-react'
import './TabTitle.css'
export default function TabTitle({ titleTab, titleSpan }) {
  return (
    <div className="header__tab">
      <div className='text'>
        <h4>{titleSpan}</h4>
        <h1>{titleTab}</h1>
      </div>
      <Calendar className='icon__title' size={80} />
    </div>
  )
}