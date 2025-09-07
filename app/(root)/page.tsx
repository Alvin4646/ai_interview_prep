import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {dummyInterviews} from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
    return (
        <>
            <section className='card-cta'>
                <div className='flex flex-col gap-2 max-w-lg'>
                    <h2>Get Interview ready with AI powered practice and feedback</h2>
                    <p className='text-lg'>Practice on real interview questions and get instant feedback</p>
                    <Button className='btn-primary max-sm:w-full' asChild>
                        <Link href='/interview'>Start an Interview</Link>
                    </Button>
                </div>
                <Image src='/robot.png' alt='robo hero' height={400} width={400} className='max-sm:hidden'/>
            </section>
            <section className='flex flex-col gap-6 mt-8'>
                <h2>Your interview</h2>
                <div className='interviews-section'>
                    {dummyInterviews.map((interview) => (
                        <InterviewCard key={interview.id} {...interview} />
                    ))}
                    {/*<p>You haven't given any interviews yet</p>*/}
                </div>
            </section>
            <section className='flex flex-col gap-6 mt-8'>
                <h2>Take a interview</h2>
                <div className='interviews-section'>
                    {dummyInterviews.map((interview) => (
                        <InterviewCard key={interview.id} {...interview} />
                    ))}
                    {/*<p>There are no interviews available at the moment</p>*/}
                </div>
            </section>
        </>
    )
}
export default Page
