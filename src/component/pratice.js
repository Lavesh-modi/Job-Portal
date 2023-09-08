const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const firstNameField = document.getElementById("firstname");
  let valid = true;

  if (!firstNameField.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    firstNameField.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }
  return valid;
}



<div className="box">
<div className="row ">
  <div className="coloumn">
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handlesubmit}
    >
      <Form>
        <div className="form-outline mb-4">
          <Field
            type="email"
            id="form2Example1"
            className="form-control"
            name="email"
          />
          <label
            className="form-label"
            htmlFor="form2Example1"
            placeholder="Email id"
          >
            Email address
          </label>
          <ErrorMessage name="email" component="div" className="error" />
        </div>

        <div className="form-outline mb-4">
          <Field
            type="password"
            id="form2Example2"
            className="form-control"
            name="password"
          />
          <label
            className="form-label"
            htmlFor="form2Example2"
            placeholder="password"
          >
            Password
          </label>
          <ErrorMessage name="password" component="div" className="error" />
        </div>

        {/* Rest of your form */}
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </Form>
    </Formik>
  </div>
</div>
</div>