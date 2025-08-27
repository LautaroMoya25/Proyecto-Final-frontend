import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useAuth } from '../hooks/useUser';
import { API_ENDPOINTS, VALIDATION_RULES, ERROR_MESSAGES } from '../constants';
import ValidatedForm from '../components/ValidatedForm';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username || formData.username.length < VALIDATION_RULES.USERNAME_MIN_LENGTH) {
      newErrors.username = `El nombre de usuario debe tener al menos ${VALIDATION_RULES.USERNAME_MIN_LENGTH} caracteres.`;
    }
    if (!formData.email || !VALIDATION_RULES.EMAIL_REGEX.test(formData.email)) {
      newErrors.email = 'El email no es válido.';
    }
    if (!formData.password || formData.password.length < VALIDATION_RULES.PASSWORD_MIN_LENGTH) {
      newErrors.password = `La contraseña debe tener al menos ${VALIDATION_RULES.PASSWORD_MIN_LENGTH} caracteres.`;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (!validate()) {
      return;
    }

    setIsLoading(true);
    const result = await register(formData);
    setIsLoading(false);

    if (result.success) {
      navigate('/');
    } else {
      setErrorMessage(result.error || ERROR_MESSAGES.REGISTRATION_FAILED);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen-minus-header-footer">
        <h1 className="text-3xl font-bold text-center mb-6">Regístrate</h1>
        
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}

        <ValidatedForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          submitText={isLoading ? 'Registrando...' : 'Registrar'}
          disabled={isLoading}
        />
        
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            ¿Ya tienes una cuenta? <Link to="/login" className="text-blue-600 hover:underline">Inicia sesión aquí</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Register;