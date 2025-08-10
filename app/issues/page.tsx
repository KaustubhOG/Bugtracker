import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

async function getIssues() {
    const res = await fetch('http://localhost:3000/api/issues', {
        cache: 'no-store',
    })

    if (!res.ok) return []

    return res.json()
}

const IssuesPage = async () => {
    const issues = await getIssues()

    return (
        <div>
            <div className="mb-4">
                <Button>
                    <Link href="/issues/new">Create New Issue</Link>
                </Button>
            </div>

            {Array.isArray(issues) && issues.length > 0 ? (
                <ul className="space-y-2">
                    {issues.map((issue) => (
                        <li key={issue.id} className="border p-4 rounded">
                            <h3 className="text-lg font-bold">{issue.title}</h3>
                            <p>{issue.description}</p>
                            <p>{issue.createdAt}</p>
                            <p>{issue.updatedAt}</p>
                            <p>{issue.Status}</p>
                            <p>{issue.id}</p>

                        </li>
                    ))}
                </ul>
            ) : (
                <p>No issues found.</p>
            )}
        </div>
    )
}

export default IssuesPage
