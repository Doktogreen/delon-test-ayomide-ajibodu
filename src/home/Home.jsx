import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Users } from 'users';

import { authAtom } from '../_state';

export { Home };

function Home() {
    const auth = useRecoilValue(authAtom);

    return (
        <div classNameName="p-4">
        </div>
    );
}
