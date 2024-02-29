import { z } from "zod";

export const AddTodoShcema = z.object({
    title:z.string().max(30).refine((value) => value.trim().length > 0, {
        message: "Title is required",
      }),
      creator:z.string().max(30).refine((value) => value.trim().length > 0, {
        message: "creatory is required",
      }),
      description: z.string().refine((value) => value.trim().length > 0, {
        message: "description is required",
      }),
})
type AddTodoVAlidationSchema=z.infer<typeof AddTodoShcema>
  export default AddTodoVAlidationSchema