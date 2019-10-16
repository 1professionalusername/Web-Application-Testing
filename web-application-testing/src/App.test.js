import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import * as rtl from '@testing-library/react'
import App from './App'
import Display from './Display'
import Dashboard from './Dashboard'



test('render the app', () => {
    const wrapper = rtl.render(<App />);
});

test('check display for balls & strikes', () => {
    const checkDisplay = rtl.render(<Display />);
    checkDisplay.getByText(/balls/i);
    checkDisplay.getByText(/strikes/i);
});

test('check dashboard for foul & hit', () => {
    const checkDashboard = rtl.render(<Dashboard />);
    checkDashboard.getByText(/hit/i);
    checkDashboard.getByText(/foul/i);
});