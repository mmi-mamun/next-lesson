import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FaBeer, FaGithub } from "react-icons/fa";
import MainLayout from '../layouts/mainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div>
        <button className="btn">Button</button>
        <button className="btn btn-primary">Button</button>
        <button className="btn btn-secondary">Button</button>
        <button className="btn btn-accent">Button</button>
        <button className="btn btn-ghost"> <FaGithub className='mx-6'></FaGithub> Button</button>
        <button className="btn btn-link"> <FaBeer className='mx-6'></FaBeer> Button</button>
      </div>
    </MainLayout>
  )
}
