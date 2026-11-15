# Teaching

Yes, I did! But currently I don't.

This section includes some material that I have delivered in the past,
particularly in the `COMP6032: High Performance Computing in Science and Engineering`
course as part of Manchester's `Advanced Computer Science MSc` programme.
It should be noted that **this module is no longer available** and the material it consists
of is not part of the current curriculum. It is presented here in the hope that it proves
useful to students on similar numerical methods courses.

## COMP6032

The labs for this course demonstrated a Successive Over-Relaxation variant of
the Gauss-Seidel method for solving a linear system representing Laplace's
equation.

Before implementing and evaluating alternate approaches for the parallelisation
of this routine, students were encouraged to develop a firm understanding
of the _principles_ of the code. The following material aims to assist in this.

### What Happens

The [SORgrid program](https://github.com/pmslavin/sorgrid) presents a visualisation
of the convergence process of Successive Over-Relaxation on a finite-difference
discretisation of Laplace's equation. Note that it is a steady-state equation and
does not vary with respect to time - the changes in element values represent the
gradual convergence towards the desired tolerance.

### Why it Happens

One of the most common questions about this routine was _why_ the series of operation
in the code should result in something resembling a solution of the given equation.
The brief tutorial [“Why the Code Solves the PDE”](doc/laplace.pdf) was written to
provide an introduction to discretisation schemes.
