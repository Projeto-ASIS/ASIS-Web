import { Header } from "@/common/components/Header";
import DatesPsyco from "./section/DatesPsyco";
import Footer from "@/common/components/Footer";
import ProtectedRoute from "@/common/components/ProtectdRoute";

export default function PsycologicalSupport() {
  return (
    <ProtectedRoute>
      <Header />
      <DatesPsyco />
      <Footer />
    </ProtectedRoute>
  )
}