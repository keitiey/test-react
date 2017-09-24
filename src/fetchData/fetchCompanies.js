import { api } from '../../configure';

export const fetchCompanies = () => (
    fetch(api)
    .then(res => res.json())
    .then(data => data)
);
