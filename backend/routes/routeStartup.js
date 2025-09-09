import userRoutes from './userRoutes.js';
import clientRoutes from './clientRoutes.js';
import leadRoutes from './leadRoutes.js';
import authRoutes from './authRoutes.js';

const routeStartup = (app) => {

    app.use('/api/auth', authRoutes);
    app.use('/api/users', userRoutes);
    app.use('/api/clients', clientRoutes);
    app.use('/api/leads', leadRoutes);
    

};

export default routeStartup;
