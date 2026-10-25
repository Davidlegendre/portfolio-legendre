'use client'
import { Box } from '@mantine/core';
import SiteFooter from '@/components/portfolio/SiteFooter';
import SiteHeader from '@/components/portfolio/SiteHeader';

export default function NavBarComponent({ children }: { children?: React.ReactNode }) {
    return <>
        <SiteHeader />
        {children}
        <Box hiddenFrom="md" h={62} aria-hidden="true" />
        <SiteFooter />
    </>;
}