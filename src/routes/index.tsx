// Updated AllRoutes component - ensure the import is added
import React, { Suspense, ComponentType } from 'react';
import { useRoutes } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/Home'));
const services = React.lazy(() => import('../pages/services'));
const team = React.lazy(() => import('../pages/Resources'));
const product = React.lazy(() => import('../pages/Products'));
const career = React.lazy(() => import('../pages/career'));
const jobapplication = React.lazy(() => import('../pages/job-application'));
const contact = React.lazy(() => import('../pages/contact'));
const digitalplatformcomponents = React.lazy(() => import('../pages/About-us'));
const digitalplatformoutcomes = React.lazy(() => import('../pages/Industries'));
const bfsiCase = React.lazy(() => import('../pages/Industries/bfsi'));
const transportLogisticsCase = React.lazy(() => import('../pages/Industries/transportlogistics'));
const healthcareCase = React.lazy(() => import('../pages/Industries/healthcare'));

const retailEcommerceCase = React.lazy(() => import('../pages/Industries/retailecommerce'));
const enterpriseDeliveryCase = React.lazy(() => import('../pages/Industries/enterprisedelivery'));
const realTimeOrderStream = React.lazy(() => import('../pages/Resources/real-time-order-stream'));
const reimaginingloanorigination = React.lazy(() => import('../pages/Resources/reimagining-loan-origination'));

const RegulatoryReportingAutomation = React.lazy(() => import('../pages/Resources/Regulatory-Reporting-Automation'));
const PredictiveFreightIntelligence = React.lazy(() => import('../pages/Resources/Predictive-Freight-Intelligence'));
const tibco = React.lazy(() => import('../pages/Products/tibco'));
const singlestore = React.lazy(() => import('../pages/Products/singlestore'));
const whatChanged = React.lazy(() => import('../pages/Resources/2025-to-2026-What-Changed-in-Enterprise'))
const distributedOperations = React.lazy(() => import('../pages/Resources/Predictive-Intelligence-for-Distributed-Operations'))
const enterpriseDataFoundations = React.lazy(() => import('../pages/Resources/The-Five-Foundations-Every-Enterprise-Build'))
const enterprisearchitecturemodernization = React.lazy(() => import('../pages/Resources/Enterprise-Architecture-Modernization'))
const whydigitaltransformationfails = React.lazy(() => import('../pages/Resources/Why-Digital-Transformation-Fails'))
const nintex = React.lazy(() => import('../pages/Products/nintex'));
const bct = React.lazy(() => import('../pages/Products/bct'));
const akinon = React.lazy(() => import('../pages/Products/akinon'));
const whyaipilotsfailtoscale = React.lazy(() => import('../pages/Resources/why-ai-pilots-fail-to-scale'));
const automationreadiness = React.lazy(() => import('../pages/Resources/Why-Most-Enterprises-Automate-Too-Early'));
const apienablemententerpriseecosystem = React.lazy(() => import('../pages/Resources/API-Enablement-for-Enterprise-Ecosystem-Integration'));
// import { Spinner } from 'react-bootstrap';
const { Spinner } = require('react-bootstrap')
const IRROPsManagementInAirlines = React.lazy(() => import('../pages/Resources/IRROPs-Management -In-Airlines'));
// const tibco = React.lazy(() => import('../pages/solutions/tibco'));
// const singlestore = React.lazy(() => import('../pages/solutions/singlestore'));
// // const yellow = React.lazy(() => import('../pages/solutions/yellow-ai'));
// const ibm = React.lazy(() => import('../pages/solutions/ibm'));
// const nintex = React.lazy(() => import('../pages/solutions/nintex'));
// const bct = React.lazy(() => import('../pages/solutions/bct'));
// const akinon = React.lazy(() => import('../pages/solutions/akinon'));

const loading = () => (<div className="d-flex justify-content-center align-items-center vh-100">
    <div className="d-flex flex-column align-items-center gap-2">
        <Spinner animation="border" variant="primary" role="status" />
        <div>Loading...</div>
    </div>
</div>) // Added a simple loading component

type LoadComponentProps = {
    component: React.LazyExoticComponent<ComponentType>;
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => (
    <Suspense fallback={loading()}>
        <Component />
    </Suspense>
);

const AllRoutes = () => {
    return useRoutes([
        {
            path: '/',
            element: <LoadComponent component={Home} />,

        },
        {
            path: '/services',
            element: <LoadComponent component={services} />
        },
        {
            path: 'solutions',
            children: [
                { path: 'tibco', element: <LoadComponent component={tibco} /> },
                { path: 'singlestore', element: <LoadComponent component={singlestore} /> },

                { path: 'nintex', element: <LoadComponent component={nintex} /> },
                { path: 'bct', element: <LoadComponent component={bct} /> },
                { path: 'akinon', element: <LoadComponent component={akinon} /> },
            ],
        },
        // {
        //     path: 'solutions',
        //     children: [
        //         { path: 'tibco', element: <LoadComponent component={tibco} /> },
        //         { path: 'singlestore', element: <LoadComponent component={singlestore} /> },
        //         // { path: 'yellow-ai', element: <LoadComponent component={yellow} /> },
        //         { path: 'ibm', element: <LoadComponent component={ibm} /> },
        //         { path: 'nintex', element: <LoadComponent component={nintex} /> },
        //         { path: 'bct', element: <LoadComponent component={bct} /> },
        //         { path: 'akinon', element: <LoadComponent component={akinon} /> },
        //     ],
        // },
        {
            path: '/contact',
            element: <LoadComponent component={contact} />
        },

        {
            path: '/case-studies/bfsi',
            element: <LoadComponent component={bfsiCase} />
        },
        {
            path: '/case-studies/transportlogistics',
            element: <LoadComponent component={transportLogisticsCase} />
        },
        {
            path: '/case-studies/healthcare',
            element: <LoadComponent component={healthcareCase} />
        },
        {
            path: '/case-studies/retailecommerce',
            element: <LoadComponent component={retailEcommerceCase} />
        },
        {
            path: '/case-studies/enterprisedelivery',
            element: <LoadComponent component={enterpriseDeliveryCase} />
        },
        {
            path: '/real-time-order-stream',
            element: <LoadComponent component={realTimeOrderStream} />
        },
        {
            path: '/reimagining-loan-origination',
            element: <LoadComponent component={reimaginingloanorigination} />
        },
        {
            path: '/Predictive-Freight-Intelligence',
            element: <LoadComponent component={PredictiveFreightIntelligence} />
        },
        {
            path: '/Regulatory-Reporting-Automation',
            element: <LoadComponent component={RegulatoryReportingAutomation} />
        },
        {
            path: '/Resources/enterprise-digital-transformation-insights-2025-2026',
            element: <LoadComponent component={whatChanged} />
        },
        {
            path: '/case-studies/predictive-intelligence-distributed-operations',
            element: <LoadComponent component={distributedOperations} />
        },
        {
            path: '/case-studies/api-enablement-enterprise-ecosystem',
            element: <LoadComponent component={apienablemententerpriseecosystem} />
        },
        {
            path: '/resources/automation-readiness-enterprise',
            element: <LoadComponent component={automationreadiness} />
        },
        {
            path: '/resources/2025-enterprise-data-foundations-for-ai-success',
            element: <LoadComponent component={enterpriseDataFoundations} />
        },
        {
            path: '/case-studies/IRROPs-Management-In-Airlines',
            element: <LoadComponent component={IRROPsManagementInAirlines} />
        },
        {
            path: '/resources/Enterprise-Architecture-Modernization',
            element: <LoadComponent component={enterprisearchitecturemodernization} />
        },

        {
            path: '/resources/Why-Digital-Transformation-Fails',
            element: <LoadComponent component={whydigitaltransformationfails} />
        },
        {
            path: '/resources/Why-AI-Pilots-Fail-To-Scale',
            element: <LoadComponent component={whyaipilotsfailtoscale} />
        },
        {
            path: '/Resources',
            element: <LoadComponent component={team} />
        },

        {
            path: '/career',
            element: <LoadComponent component={career} />
        },
        {
            path: '/Products',
            element: <LoadComponent component={product} />
        },
        {
            path: "/job-application/:jobId",
            element: <LoadComponent component={jobapplication} />
        },
        {
            path: '/About-us',
            element: <LoadComponent component={digitalplatformcomponents} />
        },
        {
            path: '/Industries',
            element: <LoadComponent component={digitalplatformoutcomes} />
        },
    ]);
};

export default AllRoutes;