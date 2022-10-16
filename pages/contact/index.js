import Head from "next/head";
import Layout from "../../components/Layout";
import MainLayout from "../../components/MainLayout";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "../../components/Header";

const schema = yup.object().shape({
  firstname: yup
    .string()
    .min(3, "You must least have a name that's 3 letters."),
  lastname: yup.string().min(4, "You must least have a name that's 4 letters."),
  email: yup.string().required().email("Please enter a valid email."),
  subject: yup
    .string()
    .oneOf(
      [
        "About little things",
        "About big things",
        "About everyday things",
        "About everything",
      ],
      "Please select a subject from the list"
    ),

  message: yup
    .string()
    .required()
    .min(10, "You must least have a name that's 10 letters."),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const doSomething = async (value) => {
    console.log(value);
    await trigger(["subject"]);
  };

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="Contact page" content="Contact page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header header={"Contact"} />
        <MainLayout>
          <form className="form-control w-96" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstname" className="label">
              <span className="label-text">First name:</span>
              {errors.firstname && (
                <span className="label-text-alt text-error">
                  {errors.firstname.message}
                </span>
              )}
            </label>
            <input
              id="firstname"
              type="text"
              className="input input-bordered"
              {...register("firstname")}
            />
            <label htmlFor="lastname" className="label">
              <span className="label-text">Last name:</span>
              {errors.lastname && (
                <span className="label-text-alt text-error">
                  {errors.lastname.message}
                </span>
              )}
            </label>
            <input
              id="lastname"
              type="text"
              className="input input-bordered"
              {...register("lastname")}
            />
            <label htmlFor="email" className="label">
              <span className="label-text">Email:</span>
              {errors.email && (
                <span className="label-text-alt text-error">
                  {errors.email.message}
                </span>
              )}
            </label>
            <input
              id="email"
              type="email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
            <label htmlFor="subject" className="label">
              <span className="label-text">Subject:</span>
              {errors.subject && (
                <span className="label-text-alt text-error">
                  {errors.subject.message}
                </span>
              )}
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              id="subject"
              {...register("subject")}
              onChange={(e) => doSomething(e.target.value)}
            >
              <option disabled selected>
                Pick a subject
              </option>
              <option value={"About little things"}>About little things</option>
              <option value={"About big things"}>About big things</option>
              <option value={"About everyday things"}>
                About everyday things
              </option>
              <option value={"About everything"}>About everything</option>
            </select>

            <label htmlFor="message" className="label">
              <span className="label-text">Message:</span>
              {errors.message && (
                <span className="label-text-alt text-error">
                  {errors.message.message}
                </span>
              )}
            </label>
            <textarea
              id="message"
              className="textarea textarea-bordered h-40"
              {...register("message")}
            ></textarea>
            <button className="btn btn-block my-6" type="submit">
              Send message
            </button>
          </form>
        </MainLayout>
      </Layout>
    </>
  );
};

export default Contact;
