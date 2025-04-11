import { Header } from '@/common/components/Header'
import './Appoinments.css'
import Calendar from '@/common/components/Calendar/Calendar'
import Footer from '@/common/components/Footer'
import ProtectedRoute from '@/common/components/ProtectdRoute'

export default function Appoinments() {
  return (
    <ProtectedRoute>
      <Header />
      <Calendar />
      <Footer />
    </ProtectedRoute>
  )
}