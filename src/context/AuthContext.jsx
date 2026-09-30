/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';
import { MOCK_STUDENT, MOCK_OFFICER } from '../data/mockUserData';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // role: 'guest' | 'student' | 'admin'
  const [role, setRole] = useState('guest');
  const [currentUser, setCurrentUser] = useState(null);

  const loginAsStudent = () => {
    setRole('student');
    setCurrentUser(MOCK_STUDENT);
  };

  const loginAsAdmin = () => {
    setRole('admin');
    setCurrentUser(MOCK_OFFICER);
  };

  const logout = () => {
    setRole('guest');
    setCurrentUser(null);
  };

  const updateStudentData = (updater) => {
    if (role === 'student') {
      setCurrentUser(prev => typeof updater === 'function' ? updater(prev) : { ...prev, ...updater });
    }
  };

  return (
    <AuthContext.Provider value={{
      role,
      currentUser,
      isStudent: role === 'student',
      isAdmin: role === 'admin',
      isGuest: role === 'guest',
      loginAsStudent,
      loginAsAdmin,
      logout,
      updateStudentData
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
