import Head from 'next/head'
import Member from './member'
import Header from './component/header.js'
import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header/>
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
        <Link
          href={{
            pathname: "/member",
            query: { id: "test" },
          }}
        >
          <a>Member</a>
        </Link>

        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Launch demo modal
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">...</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
