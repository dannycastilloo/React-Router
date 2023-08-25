import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useForm } from '../hooks/useForm'

export const Login = () => {

    const initialForm = {
        name: '',
        tech: '',
        email: '',
        youtube: ''
    }

    const {formState,name,tech,email,youtube,onInputChange} = useForm(initialForm)
    const {setUser} = useContext(UserContext)

    const onSubmit = (e) => {
        e.preventDefault()
        setUser(formState)
    }

    return (
        <>
            <div className="container">
                <h1>Log in</h1>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>

                        <input type="text" className="form-control" name="name" value={name} onChange={onInputChange} />

                        <label htmlFor="tech" className="form-label">Technology</label>
                        <input type="text" className="form-control" name="tech" value={tech} onChange={onInputChange} />

                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={email} onChange={onInputChange} />

                        <label htmlFor="youtube" className="form-label">YouTube Channel</label>
                        <input type="text" className="form-control" name="youtube" value={youtube} onChange={onInputChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
