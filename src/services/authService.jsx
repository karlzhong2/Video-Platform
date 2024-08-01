import axios from 'axios';

const API_BASE_URL = 'http://192.168.1.138:4000/api';  // Ensure this is the correct backend API address

export const registerWithEmail = async (email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/email/register`, { email });
    return {
      success: response.status === 200,
      data: response.data
    };
  } catch (error) {
    console.error('Error registering email:', error);
    return {
      success: false,
      data: { message: error.message || 'Failed to connect to the server' }
    };
  }
};

// 验证验证码函数
export const verifyCode = async (email, verificationCode) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/email/verify-code`, { email, verificationCode });
    return {
      success: response.status === 200,
      message: response.data.message || 'Verification successful',
      data: response.data
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || 'Verification failed',
      data: error.response ? error.response.data : null
    };
  }
};

export const getUserData = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`);
    return {
      success: response.status === 200,
      data: response.data
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return {
      success: false,
      data: { message: error.message || 'Failed to connect to the server' }
    };
  }
};








