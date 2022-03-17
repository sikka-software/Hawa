import useTranslation from "next-translate/useTranslation";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Wallet = (props) => {
  const { t } = useTranslation("common");
  const classes = useStyles();
  return (
    <div className="block-pay-content" style={{ padding: 20 }}>
      <div key="Payment">
        <>
          <Grid
            container
            spacing={3}
            alignContent={"center"}
            alignItems={"center"}
            style={{ width: "100%", margin: 0 }}
          >
            <Grid item xs={4}>
              <Paper
                className={classes.paper}
                style={{
                  boxShadow: "none",
                  fontWeight: "bold"
                }}
              >
                {t("payment-made")} <br />
                {props.amount} {t(props.SelectedCurrency)}
              </Paper>
            </Grid>
            <Grid
              item
              style={{
                padding: 0,
                margin: "-5px"
              }}
            >
              <Paper
                className={classes.paper}
                style={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  fontSize: "18px",
                  fontWeight: "bold",
                  padding: 0
                }}
              >
                -
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                className={classes.paper}
                style={{
                  boxShadow: "none",
                  fontWeight: "bold"
                }}
              >
                {t("amount-in-wallet")} <br />
                {props.total_wallet.toFixed(2)} {t(props.SelectedCurrency)}
              </Paper>
            </Grid>
            <Grid
              item
              style={{
                padding: 0,
                margin: "-5px"
              }}
            >
              <Paper
                className={classes.paper}
                style={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  fontSize: "18px",
                  fontWeight: "bold",
                  padding: 0
                }}
              >
                =
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                className={classes.paper}
                style={{
                  boxShadow: "none",
                  fontWeight: "bold"
                }}
              >
                {t("left-amount-wallet")} <br />
                {props.leftAmount.toFixed(2)} {t(props.SelectedCurrency)}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                className={classes.paper}
                style={{
                  boxShadow: "none",
                  fontWeight: "bold"
                }}
              >
                {t("remaining-amount")}: {props.remainingAmount.toFixed(2)}{" "}
                {t(props.SelectedCurrency)}
              </Paper>
            </Grid>
            {!props.leftAmount && (
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  onClick={(e) => props.handleWalletPayNow(e)}
                >
                  {props.loading ? (
                    <CircularProgress
                      variant="indeterminate"
                      style={{ color: "white" }}
                      size={25}
                    />
                  ) : (
                    t("pay-now")
                  )}
                </Button>
              </Grid>
            )}
          </Grid>
        </>
      </div>
    </div>
  );
};

export default Wallet;
