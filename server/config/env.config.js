import 'dotenv/config'
import zod from 'zod'

const envSchema = zod.object({
  PORT: zod.coerce.number(),
  PRIVATE_KEY: zod.string(),
})

const validatedEnv = envSchema.safeParse(process.env)

if (!validatedEnv.success) {
  throw new Error(JSON.stringify(validatedEnv.error.flatten().fieldErrors))
}

export const CONFIG = {
  PORT: validatedEnv.data.PORT,
  PRIVATE_KEY: validatedEnv.data.PRIVATE_KEY,
}
