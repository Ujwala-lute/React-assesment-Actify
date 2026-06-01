import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../features/tableSlice";

function UserForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   console.log(data);
 
  const newUser = {
    id: crypto.randomUUID(),
    ...data,
  };
  
  dispatch(addUser(newUser));
  reset();
};

   

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Add User</h2>

      <div>
        <input
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "Name is required",
          })}
        />
        <p>{errors.name?.message}</p>
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
          })}
        />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <input
          type="text"
          placeholder="City"
          {...register("city", {
            required: "City is required",
          })}
        />
        <p>{errors.city?.message}</p>
      </div>

      <div>
        <input
          type="text"
          placeholder="Phone"
          {...register("phone", {
            required: "Phone is required",
            minLength: {
              value: 10,
              message: "Phone must be 10 digits",
            },
          })}
        />
        <p>{errors.phone?.message}</p>
      </div>

      <button type="submit">
        Add User
      </button>
    </form>
  );
}

export default UserForm;