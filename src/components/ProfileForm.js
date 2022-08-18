import React, { useState } from 'react'

function ProfileForm({submit}) {
    const [profile, setProfile] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: ""
    });

    const handler = (event) => {
        setProfile((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }
    const handleForm = (e) => {
        e.preventDefault();
        submit(profile)
}


  return (
      <div className="formContainer">
          <h3>Profile Form</h3>
          <form onSubmit={handleForm}>
              <fieldset>
                <legend>Bio data</legend>  
                  <div className="names">
                      <label>First Name
                          <input name="firstname" value=
                              {profile.firstname} type="text" onChange={handler}/>
                      </label>
                      <label>  Last Name
                          <input name="lastname" value=
                              {profile.lastname} type="text" onChange={handler}/>
                      </label>
                      
               </div>
                  <div className="names">
                      <label>Email
                          <input name="email" value=
                              {profile.email} type="email" onChange={handler}/>
                      </label>
                      <label>  phone
                          <input name="phone" value=
                              {profile.phone} type="tel" onChange={handler}/>
                      </label>
                      
               </div>
              </fieldset>    
<button className='form' type='submit'>add profile</button>
</form>
    </div>
  )
}

export default ProfileForm