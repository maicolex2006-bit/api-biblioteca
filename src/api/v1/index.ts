import { Router } from "express";
import authorRoutes from "../../modules/Author/author.routes";
import bookRoutes from "../../modules/Book/book.routes";
import loanRoutes from "../../modules/Loan/loan.routes";

const router = Router();

router.use("/authors", authorRoutes);
router.use("/books", bookRoutes);
router.use("/loans", loanRoutes);

export default router;
