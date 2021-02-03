const sendgrid = require('@sendgrid/mail')
const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL, SENDGRID_FROM_EMAIL } = process.env

exports.handler = async function (event, context, callback) {
  const formData = JSON.parse(event.body)
  sendgrid.setApiKey(SENDGRID_API_KEY)

  const data = {
    to: SENDGRID_TO_EMAIL,
    from: SENDGRID_FROM_EMAIL,
    subject: `New inquiry from ${formData.student.firstname} ${formData.student.lastname}`,
    html: `
Student:
<ul>
  <li>First name: ${formData.student.firstname}</li>
  <li>Last name: ${formData.student.lastname}</li>
  <li>Age: ${formData.student.age}</li>
  <li>Email: ${formData.student.email}</li>
</ul>

Parent:
<ul>
  <li>First name: ${formData.parent.firstname}</li>
  <li>Last name: ${formData.parent.lastname}</li>
  <li>Email: ${formData.parent.email}</li>
</ul>

Subject:
<ul>
  <li>Subject: ${formData.subject}</li>
  <li>Other subject description: ${formData.otherSubjectDescription}</li>
  <li>Course: ${formData.course}</li>
  <li>Other course description: ${formData.otherCourseDescription}</li>
</ul>

Additional Notes/Comments:
<blockquote>${formData.additionalNotes}</blockquote>
`
  }

  try {
    await sendgrid.send(data)
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true })
    }
  } catch (error) {
    return {
      statusCode: error.code,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, error: error.message })
    }
  }
}
