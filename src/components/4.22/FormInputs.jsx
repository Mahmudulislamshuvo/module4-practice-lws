import useFormInput from "../../hooks/useFormInput";

export default function Form() {
  const firstNameProps = useFormInput("Shuvo");
  const lastNameProps = useFormInput("Sumona");

  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
}
