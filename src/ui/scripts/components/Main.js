import { compose, setDisplayName } from 'recompose'

import h from '../utils/h'

import Login from './Login'

const enhance = compose(

	setDisplayName('Main')

)

const Component = () => (

	h(Login)

)

export default enhance(Component)