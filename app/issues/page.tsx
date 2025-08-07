import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
const IssuesPage = () => {
    return (
        <div>this is buttton
            <Button>
                <Link href='/issues/new'>New Issues</Link>
            </Button>
        </div>
    )
}

export default IssuesPage