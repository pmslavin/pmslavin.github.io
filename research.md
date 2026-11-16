# Research Interests

### RO-Crate

By representing the entirety of a digital object in an extensible linked-data
format, RO-Crate allows digital objects to act as dynamic components in scientific
workflows. An extensive toolchain supporting automation and validation enables
RO-Crates to be integrated into existing workflows.

RO-Crate is widely used in a variety of domains with applications including:

* Gas chromatography–mass spectrometry of [samples](https://www.astronomy.com/science/nasas-asteroid-bennu-samples-have-rocks-unlike-any-meteorite-ever-found) returned from the asteroid [Bennu](https://en.wikipedia.org/wiki/101955_Bennu) by the [OSIRIS-REx](https://science.nasa.gov/mission/osiris-rex) mission.
* Tracking workflow provenance in the [Barcelona Supercomputing Center's](https://www.bsc.es) [distributed computing framework](https://www.bsc.es/news/bsc-news/bsc-expands-compss-new-programming-language-binding-and-real-time-debugging-tools).
* Automating lab processes at the [Hopkins Extreme Materials Institute](https://hemi.jhu.edu).
* Describing complex climate datasets in the [Coupled Model Intercomparison Project](https://wcrp-cmip.org).
* Enabling [AI-ready processes and datasets](https://www.psdi.ac.uk/news_ai_ready_data) in the UK's [Physical Sciences Data Infrastructure](https://www.psdi.ac.uk).

RO-Crate enables _actionable_ data by supporting domain-specific ontologies,
records detailed retrospective provenance of experimental processes, and
supports data-stewardship by enabling interoperable and verifiable metadata.

### Cryptographic Methods for FDO Verification

_Trust_, both in the provenance of datasets and also in the accuracy of descriptions
of the processes that operate on those datasets, plays an important role in
establishing confidence in FAIR Digital Objects.

But discussions around practices for establishing trust in FDOs often focus on
_policies_ intended to encourage qualitative measures of trust: _“They're a
prestigious institution”, “We've known the PI for years”, “They publish in the
best journals”_, etc.

This approach neglects the many technical _mechanisms_ which can be used to
make provable and definitive assertions about FDOs: digital signatures, Message
Authentication Codes, Public-key cryptography, Merkle logs, zero-knowledge
proofs, Byzantine fault tolerance, and other cryptographic methods are available
to provide unfalsifiable provenance records for FAIR Digital Objects which are
provably correct rather than relying on vague notions of "trust".

### Scientific Workflow Automation

We can have nice metadata when someone types it into a box on a webpage, but
that approach doesn't scale.

Automatic annotation of instruments, datasets, experiments, processes, workflows
and their outputs allows for scalable, interoperable, and machine-actionable
FDOs.

### Numerical Measures of Data Quality

A component of the [CDIF4EOSC](https://cdif4eosc.eu) project is to extend the
[Cross-Domain Interoperability Framework](https://cross-domain-interoperability-framework.github.io/cdifbook/)
to include a Data Quality profile. I participate in this effort, with a focus
on Climate/Earth Science/Geospatial data and in particular how quantitative measures
of data quality can be established which are sufficiently general to be applicable
across scientific domains, yet descriptive enough to make meaningful claims about
specific types of dataset.
