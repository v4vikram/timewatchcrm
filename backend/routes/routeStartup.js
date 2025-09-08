import userRoutes from './userRoutes.js';

const routeStartup = (app) => {
    // app.use('/', (req, res) => {
    //     res.send("server running")
    // });
    app.use('/api/users', userRoutes);
    

};

export default routeStartup;
