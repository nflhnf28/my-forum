import LoginInput from '../components/LoginInput';
import PropTypes from 'prop-types'

const stories = {
  title: 'LoginInput',
  component: LoginInput
};

export default stories;

// Template function to create the component
const Template = (args) => <LoginInput {...args} />;

// Story to show error on login attempt
export const LoginError = Template.bind({});
LoginError.args = {
  login: (credentials) => {
    console.log('Login failed for', credentials);
    alert('Login failed. Please check your credentials.');
  },
};

LoginError.propTypes = {
  login: PropTypes.func.isRequired,
};