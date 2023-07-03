import { z } from 'zod'

export const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesAmount: z
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos ')
    .max(60, 'O ciclo precisa ser de no máximo 60 segundos'),
})
