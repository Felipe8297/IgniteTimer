import { z } from 'zod'
import { newCycleFormValidationSchema } from '../pages/Home/schema'

export type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>
