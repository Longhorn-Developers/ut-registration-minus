import DialogProvider from '@views/components/common/DialogProvider/DialogProvider';
import ExtensionRoot from '@views/components/common/ExtensionRoot/ExtensionRoot';
import Map from '@views/components/map/Map';
import React from 'react';

/**
 * Renders the map page for the UTRM (UT Registration Minus) extension.
 */
export default function MapPage() {
    return (
        <ExtensionRoot>
            <DialogProvider>
                <Map />
            </DialogProvider>
        </ExtensionRoot>
    );
}
