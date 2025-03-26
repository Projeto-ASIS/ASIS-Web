export default function formatCPF(cpf) {
  return cpf.replace(/\D/g, "")
}