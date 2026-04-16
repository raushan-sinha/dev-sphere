import { Helmet } from 'react-helmet-async';
import type { SEOProps } from '../../types/seoTypes.types';

const SEO = ({ title, description }: SEOProps) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
        </Helmet>
    )
}

export default SEO;