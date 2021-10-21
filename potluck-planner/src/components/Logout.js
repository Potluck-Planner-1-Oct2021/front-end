import {  useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutSuccess } from './../actions/landingActions'

const Logout = (props) => {
    console.log('props', props)
    const { push } = useHistory()
    localStorage.removeItem("token")
    props.logoutSuccess()
    push('/login')

    return(null)
}

export default connect(null, { logoutSuccess })(Logout);