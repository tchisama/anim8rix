"use client";

import  React , { useEffect} from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

	
	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider defaultTheme="dark"  {...themeProps}>{children}</NextThemesProvider>
		</NextUIProvider>
	);
}
