import userRoutes from './userRoutes.js';
import clientRoutes from './clientRoutes.js';
import leadRoutes from './leadRoutes.js';

const routeStartup = (app) => {

    app.use('/api/users', userRoutes);
    app.use('/api/clients', clientRoutes);
    app.use('/api/leads', leadRoutes);
    

};

export default routeStartup;
