import React, { useRef, useEffect } from 'react';

import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

function Fancybox({ options, delegate, children }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const delegateSelector = delegate || '[data-fancybox]';
        const fancyboxOptions = options || {};

        NativeFancybox.bind(container, delegateSelector, fancyboxOptions);

        return () => {
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    }, [delegate, options]);

    return <div ref={containerRef}>{children}</div>;
}

export default Fancybox;
