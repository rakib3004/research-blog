import React from "react";

const Home = () => {
  return (
    <div className="mb-20">
      <h1 className="sm:text-4xl text-2xl font-blod my-6 text-gray-900">
        Hello, This is my first research blog
      </h1>
      <p className="mx-auto leading-relaxed text-base mb-4">
        A certification authority is an organization that makes a mapping
        between the public keys and public DNS names done by a Certificate
        Authority (CA). One particular key is only appropriate for a single
        site. A Certificate Authority provides a particular key for a particular
        site by using its own private key to cryptographically sign the
        website’s public key. This signature is computationally infeasible to
        duplicate. Clients maintain trust anchor stores containing the public
        key owned by a Certificate Authority. They use those public keys to
        cryptographically verify the CA’s signatures.
      </p>
      <p className="mx-auto leading-relaxed text-base mb-4">
        Hypertext Transfer Protocol Secure (HTTPS) is a secured extension of
        HTTP. It uses cryptography for secure communication over a computer
        network. The communication protocol of HTTPS is encrypted using
        Transport Layer Security also known as HTTP over TLS. HTTPS creates a
        secure channel over an insecure network. It ensures the privacy and
        integrity of the exchanged data during transmission and authentication
        of the accessed website. HTTPS requires a trusted third party to sign
        digital certificates to ensure authenticity. HTTPS protects against man
        in the middle, eavesdropping, and tampering.
      </p>
      <p className="mx-auto leading-relaxed text-base mb-4">
        An X.509 certificate is a data format that bundles a public key together
        with some metadata (Server’s DNS name) about the key’s entity. The site
        operator is the owner of the key. When a client connects to an HTTPS web
        server, the web server presents its certificate for the client to
        verify. The client verifies that the certificate has not expired and
        matches the desired server DNS name.
      </p>
    </div>
  );
};

export default Home;
